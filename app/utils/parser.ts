import xml2js from "xml2js";

// Define the XmlToJson function
export const XmlToJson = (xml: string) => {
  // Create a new promise that will handle the XML to JSON conversion
  return new Promise((resolve, reject) => {
    // Use xml2js to parse the XML string
    xml2js.parseString(
      xml,
      { explicitArray: false },
      (err: any, result: unknown) => {
        if (err) {
          // If there's an error, reject the promise
          return reject(err);
        }
        // If successful, resolve the promise with the JSON result
        resolve(result);
      }
    );
  });
};
