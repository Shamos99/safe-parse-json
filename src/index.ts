function safeParseJson(input: unknown):
  | {
      success: true;
      data: unknown;
    }
  | {
      success: false;
      error: unknown;
    } {
  try {
    if (typeof input !== "string") {
      throw new Error("Input is not string!");
    }

    return {
      success: true,
      data: JSON.parse(input),
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
}

export { safeParseJson };
