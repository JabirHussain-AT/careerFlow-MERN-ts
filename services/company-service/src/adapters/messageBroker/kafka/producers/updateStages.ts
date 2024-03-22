import { producer } from "../index";

export default async (data: { stage: string; email : string}) => {
  try {
    await producer.connect();

    const messages = [
      {
        topic: "to-user",
        messages: [
          {
            key: "updateStage",
            value: JSON.stringify(data),
          },
        ],
      },
    ];

    await producer.sendBatch({ topicMessages: messages });

    // Disconnect the Kafka producer after sending the message
    await producer.disconnect();
  } catch (err) {
    console.error("Error in sending Kafka message:", err);
    // Handle the error as needed
  } finally {
    await producer.disconnect();
  }
};
