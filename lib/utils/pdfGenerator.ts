import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

/**
 * Generates a PDF from the worksheet preview
 * @param title - Worksheet title
 * @param elementId - ID of the element to capture (default: 'worksheet-preview')
 */
export async function generatePDF(title: string, elementId: string = 'worksheet-preview'): Promise<void> {
  try {
    // Get the worksheet element
    const element = document.getElementById(elementId);

    if (!element) {
      throw new Error(`Element with ID '${elementId}' not found`);
    }

    // Show loading state (you can add a loading indicator here)
    console.log('Generating PDF...');

    // Capture the element as canvas
    const canvas = await html2canvas(element, {
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff'
    });

    // Calculate dimensions for A4 page
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // Create PDF
    const pdf = new jsPDF({
      orientation: imgHeight > imgWidth ? 'portrait' : 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    // Add the image to PDF
    const imgData = canvas.toDataURL('image/png');

    if (imgHeight <= pageHeight) {
      // Single page
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    } else {
      // Multiple pages
      let heightLeft = imgHeight;
      let position = 0;

      while (heightLeft > 0) {
        if (position > 0) {
          pdf.addPage();
        }
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        position -= pageHeight;
      }
    }

    // Generate filename
    const filename = `${title.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.pdf`;

    // Download the PDF
    pdf.save(filename);

    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
    throw new Error('Failed to generate PDF. Please try again.');
  }
}

/**
 * Alternative PDF generation with better formatting
 */
export async function generateWorksheetPDF(config: {
  title: string;
  characters: string[];
  worksheetElement: HTMLElement;
}): Promise<void> {
  const { title, worksheetElement } = config;

  try {
    // Capture worksheet
    const canvas = await html2canvas(worksheetElement, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      windowWidth: 1200,
      windowHeight: worksheetElement.scrollHeight
    });

    // Create PDF in portrait A4
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    const pageHeight = 297;

    let heightLeft = imgHeight;
    let position = 0;

    // Add pages as needed
    while (heightLeft > 0) {
      if (position !== 0) {
        pdf.addPage();
      }

      pdf.addImage(
        canvas.toDataURL('image/png'),
        'PNG',
        0,
        position,
        imgWidth,
        imgHeight,
        undefined,
        'FAST'
      );

      heightLeft -= pageHeight;
      position -= pageHeight;
    }

    // Save with timestamp
    const timestamp = new Date().toISOString().slice(0, 10);
    pdf.save(`${title}_${timestamp}.pdf`);
  } catch (error) {
    console.error('PDF generation error:', error);
    alert('Failed to generate PDF. Please try again.');
  }
}
