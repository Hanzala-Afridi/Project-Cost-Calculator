document.getElementById('projectCostForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Retrieve form values
    const projectType = document.getElementById('projectType').value;
    const numPages = parseInt(document.getElementById('numPages').value);
    const designComplexity = document.getElementById('designComplexity').value;
    const targetPlatform = document.getElementById('targetPlatform').value;
    const wpTheme = document.getElementById('wpTheme').value;
    const numPlugins = parseInt(document.getElementById('numPlugins').value);
    const customizationLevel = document.getElementById('customizationLevel').value;

    // Base costs for different project types
    let baseCost = 0;
    switch (projectType) {
      case 'website-basic':
        baseCost = 500;
        break;
      case 'website-ecommerce':
        baseCost = 1000;
        break;
      case 'website-custom':
        baseCost = 1500;
        break;
      case 'app-mobile':
        baseCost = 2000;
        break;
      case 'app-web':
        baseCost = 1800;
        break;
      case 'software-development':
        baseCost = 2500;
        break;
      default:
        baseCost = 100;
    }

    // Add cost based on the number of pages
    const pageCost = numPages * 50;  // Example: $50 per page

    // Add cost based on design complexity
    let designCost = 0;
    if (designComplexity === 'simple') {
      designCost = 300;
    } else if (designComplexity === 'moderate') {
      designCost = 600;
    } else if (designComplexity === 'complex') {
      designCost = 1000;
    }

    // Add cost for platform type
    let platformCost = 0;
    if (targetPlatform === 'both') {
      platformCost = 500;
    }

    // WordPress-specific costs
    let wpCost = 0;
    if (wpTheme === 'custom') {
      wpCost += 700;
    }
    wpCost += numPlugins * 100; // Example: $100 per plugin

    // Add customization costs
    if (customizationLevel === 'major') {
      wpCost += 500; // Example: $500 for major customization
    }

    // Calculate total cost
    const totalCost = baseCost + pageCost + designCost + platformCost + wpCost;

    // Display the calculated cost
    alert(`The estimated project cost is $${totalCost}`);
  });