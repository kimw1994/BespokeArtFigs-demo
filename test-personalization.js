// Test script to verify personalization features

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log('Testing product personalization features...');
  
  // Check if personalization section exists
  const personalizationSection = document.querySelector('.product-personalization');
  if (personalizationSection) {
    console.log('✓ Personalization section is loaded');
  } else {
    console.log('✗ Personalization section is missing');
  }
  
  // Check if audience tabs exist
  const audienceTabs = document.querySelector('.audience-tabs');
  if (audienceTabs) {
    console.log('✓ Audience tabs are loaded');
  } else {
    console.log('✗ Audience tabs are missing');
  }
  
  // Check if brand values section exists
  const brandValuesSection = document.querySelector('.brand-values');
  if (brandValuesSection) {
    console.log('✓ Brand values section is loaded');
  } else {
    console.log('✗ Brand values section is missing');
  }
  
  // Test photo upload functionality
  const photoUpload = document.querySelector('#photo-upload');
  if (photoUpload) {
    console.log('✓ Photo upload component is present');
    // Add event listener for testing
    photoUpload.addEventListener('change', function(e) {
      if (e.target.files.length > 0) {
        console.log('✓ Photo upload works');
      }
    });
  } else {
    console.log('✗ Photo upload component is missing');
  }
  
  // Test style selector
  const styleSelector = document.querySelector('input[name="style"]');
  if (styleSelector) {
    console.log('✓ Style selector is present');
  } else {
    console.log('✗ Style selector is missing');
  }
  
  console.log('Test completed');
});