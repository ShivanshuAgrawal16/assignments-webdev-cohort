export async function calculator({ operator, num1, num2 }) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return `Both inputs should be numbers.`;
  }

  switch (operator) {
    case "add":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      if (num2 === 0) return `Cannot divide by zero`;
      return num1 / num2;
    default:
      return `Unsupported operation. Use add, subtract, multiply or divide.`;
  }
}

export const calculatorTool = {
  type: "function",
  function: {
    name: "calculator",
    description:
      "A simple calculator function that performs basic arithmetic operations.",
    parameters: {
      type: "object",
      properties: {
        operator: {
          type: "string",
          enum: ["add", "subtract", "multiply", "divide"],
        },
        num1: { type: "number" },
        num2: { type: "number" },
      },
      required: ["operator", "num1", "num2"],
    },
  },
};
