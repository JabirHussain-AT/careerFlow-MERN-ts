import { consumer } from "./index";
import { createSubscriber, IUserSubscriber } from "./subscriber";
import color from 'colors'

export const runConsumer = async () => {
  try {
    await consumer.connect().then(()=> console.log(color.green('connected kafka')))

    await consumer.subscribe({
      topic: "to-chat",
      fromBeginning: true,
    });

    const subscriber = createSubscriber();

    await consumer.run({
      eachMessage: async ({ message }) => {
        const { key, value } = message;
        console.log(`Received message with key: ${key}, value: ${value}`);
        
        const subscriberMethod = String(key) as keyof IUserSubscriber;
        console.log(`Calling subscriber method: ${subscriberMethod}`);
        
        const subscriberData = JSON.parse(String(value));
      
        try {
          await subscriber[subscriberMethod](subscriberData);
          console.log(`Successfully processed message`);
        } catch (error  ) {
          console.error(`Error processing message: ${error?.message}`);
          throw new Error(error?.message);
        }
      },
      
      
    });
  } catch (error  ) {
    throw new Error("Kafka Consume Error : " + error?.message);
  }
};

export const stopConsumer = async () => {
  await consumer.stop();
  await consumer.disconnect();
};
