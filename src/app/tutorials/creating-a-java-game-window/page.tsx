import Link from "next/link";

const javaCode = `import org.lwjgl.*;
import org.lwjgl.glfw.*;
import org.lwjgl.opengl.*;
import org.lwjgl.system.*;
import java.nio.*;

import static org.lwjgl.glfw.Callbacks.*;
import static org.lwjgl.glfw.GLFW.*;
import static org.lwjgl.opengl.GL11.*;
import static org.lwjgl.system.MemoryStack.*;
import static org.lwjgl.system.MemoryUtil.*;

public class Main {
    private long window;

    public void run() {
        System.out.println("Hello LWJGL " + Version.getVersion() + "!");
        init();
        loop();
        glfwFreeCallbacks(window);
        glfwDestroyWindow(window);
        glfwTerminate();
        glfwSetErrorCallback(null).free();
    }

    private void init() {
        GLFWErrorCallback.createPrint(System.err).set();
        if (!glfwInit()) {
            throw new IllegalStateException("Unable to initialize GLFW");
        }
        glfwDefaultWindowHints();
        glfwWindowHint(GLFW_VISIBLE, GLFW_FALSE);
        glfwWindowHint(GLFW_RESIZABLE, GLFW_TRUE);

        window = glfwCreateWindow(800, 600, "Xelforo Tutorial", NULL, NULL);
        if (window == NULL) {
            throw new RuntimeException("Failed to create the GLFW window");
        }
        glfwSetKeyCallback(window, (w, key, scancode, action, mods) -> {
            if (key == GLFW_KEY_ESCAPE && action == GLFW_RELEASE) {
                glfwSetWindowShouldClose(w, true);
            }
        });
        try (MemoryStack stack = stackPush()) {
            IntBuffer pWidth = stack.mallocInt(1);
            IntBuffer pHeight = stack.mallocInt(1);
            glfwGetWindowSize(window, pWidth, pHeight);
            GLFWVidMode vidmode = glfwGetVideoMode(glfwGetPrimaryMonitor());
            glfwSetWindowPos(window,
                (vidmode.width() - pWidth.get(0)) / 2,
                (vidmode.height() - pHeight.get(0)) / 2);
        }
        glfwMakeContextCurrent(window);
        glfwSwapInterval(1);
        glfwShowWindow(window);
    }

    private void loop() {
        GL.createCapabilities();
        glClearColor(0.1f, 0.1f, 0.1f, 0.0f);
        while (!glfwWindowShouldClose(window)) {
            glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
            glBegin(GL_TRIANGLES);
            glColor3f(0.0f, 1.0f, 0.0f);
            glVertex2f(-0.5f, -0.5f);
            glColor3f(1.0f, 0.0f, 0.0f);
            glVertex2f(0.5f, -0.5f);
            glColor3f(0.0f, 0.0f, 1.0f);
            glVertex2f(0.0f, 0.5f);
            glEnd();
            glfwSwapBuffers(window);
            glfwPollEvents();
        }
    }

    public static void main(String[] args) {
        new Main().run();
    }
}`;

export default function JavaGameWindowTutorial() {
  return (
    <div className="relative bg-white pt-20">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <Link href="/tutorials" className="text-sm text-[#2563eb] hover:text-[#1d4ed8] mb-6 inline-block">← Back to Tutorials</Link>

        <h1 className="text-3xl font-bold text-[#1a1a1a] mb-4">Creating a Java Game Window from Scratch</h1>

        <div className="flex flex-wrap gap-3 mb-8 text-sm text-[#6b7280]">
          <span className="px-2 py-0.5 bg-[#2563eb]/8 text-[#2563eb] rounded font-medium">Beginner</span>
          <span>Java</span>
          <span>•</span>
          <span>45 minutes</span>
          <span>•</span>
          <span>© Andrew Groves</span>
        </div>

        <div className="prose prose-slate max-w-none">
          <p className="text-[#6b7280] leading-relaxed mb-6">
            Welcome to your first step into Java game development! While many developers start with
            game engines like Unity or Unreal, understanding how to create a game window from scratch
            gives you invaluable insight into what happens under the hood.
          </p>

          <h2 className="text-xl font-semibold text-[#1a1a1a] mt-10 mb-3">Setting Up</h2>
          <p className="text-[#6b7280] leading-relaxed mb-4">
            We'll use <strong className="text-[#1a1a1a]">LWJGL (Lightweight Java Game Library)</strong> —
            the same foundation used by Minecraft. You'll need JDK 17+ and Maven.
          </p>

          <h2 className="text-xl font-semibold text-[#1a1a1a] mt-10 mb-3">The Code</h2>
          <pre className="text-sm text-[#1a1a1a] font-mono leading-relaxed overflow-x-auto mb-6">
            {javaCode}
          </pre>

          <h2 className="text-xl font-semibold text-[#1a1a1a] mt-10 mb-3">Running It</h2>
          <pre className="text-sm text-[#1a1a1a] font-mono leading-relaxed overflow-x-auto mb-6">
{`mvn clean compile exec:java \\
  -Dexec.mainClass="com.xelforo.tutorial.Main"`}
          </pre>

          <h2 className="text-xl font-semibold text-[#1a1a1a] mt-10 mb-3">Next Steps</h2>
          <ul className="text-[#6b7280] leading-relaxed space-y-1 list-disc list-inside">
            <li>Learn Modern OpenGL (shaders, VBOs)</li>
            <li>Add texture mapping</li>
            <li>Implement a camera system</li>
            <li>Build a game server</li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-[#e5e7eb] text-center">
          <a href="https://github.com/pimpduckdev/java-game-window-tutorial" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2.5 bg-[#1a1a1a] hover:bg-[#333] text-white text-sm font-medium rounded-lg transition-colors">
            View on GitHub →
          </a>
        </div>

        <p className="text-center text-xs text-[#9ca3af] mt-8">Tutorial by ©Andrew Groves • Xelforo.io</p>
      </div>
    </div>
  );
}
