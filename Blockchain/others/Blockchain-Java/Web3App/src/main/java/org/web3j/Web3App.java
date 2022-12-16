package org.web3j;

import org.web3j.crypto.Credentials;
import org.web3j.crypto.WalletUtils;
import org.web3j.generated.contracts.HelloWorld;
import org.web3j.protocol.Web3j;
import org.web3j.protocol.http.HttpService;
import org.web3j.tx.gas.DefaultGasProvider;

/**
 * <p>This is the generated class for <code>web3j new helloworld</code></p>
 * <p>It deploys the Hello World contract in src/main/solidity/ and prints its address</p>
 * <p>For more information on how to run this project, please refer to our <a href="https://docs.web3j.io/quickstart/#deployment">documentation</a></p>
 */
public class Web3App {
   // My wallet
   // private static final String nodeUrl = System.getenv().getOrDefault("WEB3J_NODE_URL", "https://ropsten.infura.io/v3/6d52ff7feeac467f8843d6051453c1c7");
   // BD's wallet
   private static final String nodeUrl = System.getenv().getOrDefault("WEB3J_NODE_URL", "https://rinkeby.infura.io/v3/24022fda545f41beb59334bdbaf3ef32");
// Not required
   // private static final String walletPassword = System.getenv().getOrDefault("WEB3J_WALLET_PASSWORD", "indrajit@2000");
//   My wallet
   // private static final String walletPrivateKey = System.getenv().getOrDefault("WEB3J_WALLET_PRIVATE_KEY", "4851179f744ae68c75820cd9bd1c072f94e799f2bc4a7a11ee325f52a405cfe7");
   // BD's wallet
   private static final String walletPrivateKey = System.getenv().getOrDefault("WEB3J_WALLET_PRIVATE_KEY", "33e8389993eea0488d813b34ee8d8d84f74f204c17b95896e9380afc6a514dc7");
   // My wallet address
      // private static final String address = System.getenv().getOrDefault("WEB3J_WALLET_ADDRESS", "0xf55E8949D6664b2C478bcB9A98af147DC240dBEA");


   public static void main(String[] args) throws Exception {
        Credentials credentials =Credentials.create(walletPrivateKey);
        Web3j web3j = Web3j.build(new HttpService(nodeUrl));
        System.out.println("Deploying HelloWorld contract ...");
        HelloWorld helloWorld = HelloWorld.deploy(web3j, credentials, new DefaultGasProvider(), "Hello Blockchain World!").send();
        System.out.println("Contract address: " + helloWorld.getContractAddress());
        System.out.println("Greeting method result: " + helloWorld.greeting().send());
       }
}
