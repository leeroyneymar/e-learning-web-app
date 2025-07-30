// Simple code executor for JavaScript in the browser
export const executeCode = async (code, language) => {
  if (language !== 'javascript') {
    return `// Code execution for ${language} is not yet supported in this demo.\n// This would typically require a backend service.\n\n// Your code:\n${code}`;
  }

  try {
    // Create a safe execution environment
    const originalConsoleLog = console.log;
    let output = '';
    
    // Override console.log to capture output
    console.log = (...args) => {
      output += args.map(arg => {
        if (typeof arg === 'object') {
          return JSON.stringify(arg, null, 2);
        }
        return String(arg);
      }).join(' ') + '\n';
    };

    // Create a sandboxed function to execute the code
    const executeInSandbox = new Function(`
      "use strict";
      try {
        ${code}
      } catch (error) {
        console.log('Error: ' + error.message);
      }
    `);

    // Execute the code
    executeInSandbox();

    // Restore original console.log
    console.log = originalConsoleLog;

    return output || '// Code executed successfully (no output)';
  } catch (error) {
    return `Error: ${error.message}`;
  }
};

// For other languages, we would typically send to a backend API
export const executeCodeRemote = async (code, language) => {
  // This would typically make an API call to a code execution service
  // For demonstration purposes, we'll just return a placeholder
  return `// Remote execution for ${language} would be implemented here\n// Your code:\n${code}`;
};

export default executeCode;