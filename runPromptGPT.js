import { Configuration, OpenAIApi } from "openai";

const config = new Configuration({
	apiKey: "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",
});

const openai = new OpenAIApi(config);

const runPrompt = async (question, res) => {
	const prompt = `question
        ${question}. Return response in the following parsable JSON format:
        {
            "Q": "question",
            "A": "answer"
        }
    `;

	const response = await openai.createCompletion({
		model: "text-davinci-001",
		prompt: question,
         temperature: 0,
    max_tokens: 100,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop: ["input:"],
		////max_tokens: 2048,
	//	temperature: 1,
	});

	const parsableJSONresponse = response.data.choices[0].text;
//	const parsedResponse = JSON.parse(parsableJSONresponse);
	////console.log("Question: ", parsedResponse.Q);
	console.log("Answer: ", response.data.choices);
    // res.send(parsableJSONresponse)
    res.status(200).json({result:
        parsableJSONresponse})
};

export default runPrompt;