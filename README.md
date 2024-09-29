# safe-parse-json

A way to safetly parse json with typescript support.

Return type:

```
{
  success: true,
  data: unknown, // your json parsed result
} |
{
  success: false,
  error: unknown // whatever error got thrown
}
```

Simply check whether `success` is true or false - and you will automatically get a typesafe way to either access your data or get an error.

Example usage:

```
import { safeParseJson } from "safe-parse-json";

const parseResult = safeParseJson(myString);

if (parseResult.success) {
    const data = jsonParseResult.data;
} else {
    console.error("Got an error with parsing", parseResult.error);
}
```
