import { icepick } from "@/icepick-client";
import { generateText } from "ai";
import z from "zod";

export const twoTool = icepick.tool({
  name: "two-tool",
  description: "Translates text into spanish",
  inputSchema: z.object({
    message: z.string(),
  }),
  outputSchema: z.object({
    twoOutput: z.string(),
  }),
  fn: async (input) => {

    // Make an LLM call to get the twoOutput
    const twoOutput = await generateText({
      model: icepick.defaultLanguageModel,
      prompt: `Translate the following text into spanish: ${input.message}`,
    });

    return {
      twoOutput: twoOutput.text,
    };
  },
});