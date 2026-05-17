import Link from "next/link";

const javaCode = `import java.io.*;
import java.net.*;
import java.util.*;

public class GameServer {
    private static final int PORT = 25565;
    private static Set<ClientHandler> clients = new HashSet<>();

    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(PORT);
        System.out.println("Game server started on port " + PORT);

        while (true) {
            Socket clientSocket = serverSocket.accept();
            System.out.println("New client connected: " + clientSocket.getInetAddress());

            ClientHandler handler = new ClientHandler(clientSocket);
            clients.add(handler);
            new Thread(handler).start();
        }
    }

    static void broadcast(String message, ClientHandler sender) {
        for (ClientHandler client : clients) {
            if (client != sender) {
                client.sendMessage(message);
            }
        }
    }
}

class ClientHandler implements Runnable {
    private Socket socket;
    private PrintWriter out;
    private BufferedReader in;
    private String playerName;

    public ClientHandler(Socket socket) throws IOException {
        this.socket = socket;
        this.out = new PrintWriter(socket.getOutputStream(), true);
        this.in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
    }

    public void run() {
        try {
            playerName = in.readLine();
            GameServer.broadcast(playerName + " joined the game!", this);
            System.out.println(playerName + " joined!");

            String message;
            while ((message = in.readLine()) != null) {
                GameServer.broadcast(playerName + ": " + message, this);
            }
        } catch (IOException e) {
            System.out.println(playerName + " disconnected.");
        } finally {
            try { socket.close(); } catch (IOException e) {}
        }
    }

    public void sendMessage(String message) {
        out.println(message);
    }
}`;

const clientCode = `import java.io.*;
import java.net.*;

public class GameClient {
    private static final String SERVER_IP = "localhost";
    private static final int SERVER_PORT = 25565;

    public static void main(String[] args) throws IOException {
        Socket socket = new Socket(SERVER_IP, SERVER_PORT);
        System.out.println("Connected to game server!");

        PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        BufferedReader console = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter your player name: ");
        String name = console.readLine();
        out.println(name);

        // Thread to listen for messages from server
        new Thread(() -> {
            try {
                String message;
                while ((message = in.readLine()) != null) {
                    System.out.println(message);
                }
            } catch (IOException e) {
                System.out.println("Disconnected from server.");
            }
        }).start();

        // Main thread sends messages
        String input;
        while ((input = console.readLine()) != null) {
            out.println(input);
        }
    }
}`;

export default function GameServerTutorial() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0a0a0f] font-sans">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(74,158,255,0.02)_0%,_transparent_30%)]"></div>
      </div>

      <div className="relative z-10 flex-1 flex-col px-6 py-12 max-w-4xl mx-auto text-white">
        <div className="mb-8">
          <Link href="/tutorials" className="text-[#4a9eff]/50 hover:text-[#4a9eff] transition-colors text-sm mb-4 inline-block">
            ← Back to Tutorials
          </Link>
          <h1 className="text-3xl font-bold text-[#4a9eff] mb-4">Building a Simple Game Server in Java</h1>
          <div className="flex flex-wrap gap-4 text-sm text-[#8b8fa3]">
            <span>📂 Java Game Development</span>
            <span>📊 Intermediate</span>
            <span>⏱ 1 hour</span>
            <span>© Andrew Groves</span>
          </div>
        </div>

        <div className="mb-8 bg-[#111118] border border-white/5 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#4a9eff] mb-3">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-[#8b8fa3]">
            <p>1. Introduction & Prerequisites</p>
            <p>2. Understanding Sockets & TCP</p>
            <p>3. Building the Server</p>
            <p>4. Handling Multiple Clients</p>
            <p>5. Building the Client</p>
            <p>6. Testing Your Server</p>
            <p>7. Next Steps</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">1. Introduction & Prerequisites</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              In this tutorial, we'll build a multiplayer game server from scratch using Java sockets. This is the same fundamental networking approach used by Minecraft's server software. By the end, you'll have a working server that can handle multiple clients sending messages to each other in real-time.
            </p>
            <div className="bg-[#111118] border border-white/5 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">What you'll need:</h3>
              <ul className="text-sm text-[#8b8fa3] space-y-1">
                <li>• Java 17 or later</li>
                <li>• Any IDE (IntelliJ, VS Code, Eclipse)</li>
                <li>• Basic understanding of Java</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">2. Understanding Sockets & TCP</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              Sockets are the foundation of network communication in Java. A <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">ServerSocket</code> listens for incoming connections on a specific port. When a client connects, it returns a <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">Socket</code> object that represents that connection.
            </p>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              TCP (Transmission Control Protocol) ensures reliable, ordered delivery of data. This is perfect for a game server where you need to guarantee that player actions arrive in the correct order.
            </p>
            <div className="bg-[#111118] border border-white/5 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Key Concepts:</h3>
              <ul className="text-sm text-[#8b8fa3] space-y-1">
                <li>• <strong className="text-white">ServerSocket</strong> — Listens for incoming client connections</li>
                <li>• <strong className="text-white">Socket</strong> — Represents a single client connection</li>
                <li>• <strong className="text-white">InputStream/OutputStream</strong> — Read/write data to clients</li>
                <li>• <strong className="text-white">Multithreading</strong> — Handle multiple clients simultaneously</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">3. Building the Server</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              Our server needs to: listen for connections, handle each client in a separate thread, and broadcast messages to all connected clients.
            </p>
            <pre className="text-xs text-[#e8eaed] font-mono leading-relaxed overflow-x-auto">
              {javaCode}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">4. Handling Multiple Clients</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              Each client is handled by a <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">ClientHandler</code> that runs in its own thread. This allows the server to handle many players simultaneously. The <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">broadcast()</code> method sends messages to all clients except the sender.
            </p>
            <div className="bg-[#111118] border border-white/5 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Why multithreading?</h3>
              <p className="text-sm text-[#8b8fa3]">
                Without threads, the server could only handle one client at a time. By spawning a new thread for each connection, we can serve hundreds of players simultaneously. In a real game server, you'd use a thread pool instead of creating unlimited threads.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">5. Building the Client</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              The client connects to the server, sends the player's name, and then runs two threads: one for listening to server messages and one for reading console input.
            </p>
            <pre className="text-xs text-[#e8eaed] font-mono leading-relaxed overflow-x-auto">
              {clientCode}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">6. Testing Your Server</h2>
            <ol className="list-decimal list-inside space-y-2 text-[#8b8fa3]">
              <li>Compile both files: <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">javac GameServer.java GameClient.java</code></li>
              <li>Start the server: <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">java GameServer</code></li>
              <li>Open multiple terminal windows and run: <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">java GameClient</code></li>
              <li>Enter a player name in each client</li>
              <li>Type messages in any client — they'll appear in all others!</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">7. Next Steps</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              This is a basic foundation. For a real game server, you'd want to add:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#8b8fa3]">
              <li>Custom binary protocol instead of text messages</li>
              <li>Player position synchronization</li>
              <li>Chunk-based world loading</li>
              <li>Authentication and encryption</li>
              <li>Thread pool with <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">ExecutorService</code></li>
              <li>UDP for real-time position updates</li>
            </ul>
          </section>

          <section className="bg-[#111118] border border-white/5 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Complete Source Code</h3>
            <p className="text-[#8b8fa3] text-sm mb-4">Get the full project on GitHub with build instructions.</p>
            <a href="https://github.com/pimpduckdev/java-game-server-tutorial" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#4a9eff]/15 hover:bg-[#4a9eff]/25 border border-[#4a9eff]/30 text-[#4a9eff] font-medium rounded-lg transition-all duration-200 text-sm">
              View on GitHub →
            </a>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-[#5a5e70] text-sm">Tutorial by ©Andrew Groves • Xelforo.io • Learn. Build. Share.</p>
        </div>
      </div>
    </div>
  );
}
