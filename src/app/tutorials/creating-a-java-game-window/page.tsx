import Link from "next/link";

const pomXmlCode = `&lt;project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 
         http://maven.apache.org/xsd/maven-4.0.0.xsd"&gt;
    &lt;modelVersion&gt;4.0.0&lt;/modelVersion&gt;
    
    &lt;groupId&gt;com.xelforo&lt;/groupId&gt;
    &lt;artifactId&gt;java-game-window-tutorial&lt;/artifactId&gt;
    &lt;version&gt;1.0-SNAPSHOT&lt;/version&gt;
    &lt;packaging&gt;jar&lt;/packaging&gt;
    
    &lt;properties&gt;
        &lt;maven.compiler.source&gt;17&lt;/maven.compiler.source&gt;
        &lt;maven.compiler.target&gt;17&lt;/maven.compiler.target&gt;
        &lt;lwjgl.version&gt;3.2.3&lt;/lwjgl.version&gt;
    &lt;/properties&gt;
    
    &lt;dependencies&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.lwjgl&lt;/groupId&gt;
            &lt;artifactId&gt;lwjgl&lt;/artifactId&gt;
            &lt;version&gt;\${lwjgl.version}&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.lwjgl&lt;/groupId&gt;
            &lt;artifactId&gt;lwjgl-glfw&lt;/artifactId&gt;
            &lt;version&gt;\${lwjgl.version}&lt;/version&gt;
        &lt;/dependency&gt;
        &lt;dependency&gt;
            &lt;groupId&gt;org.lwjgl&lt;/groupId&gt;
            &lt;artifactId&gt;lwjgl-opengl&lt;/artifactId&gt;
            &lt;version&gt;\${lwjgl.version}&lt;/version&gt;
        &lt;/dependency&gt;
    &lt;/dependencies&gt;
&lt;/project&gt;`;

const javaCode = `package com.xelforo.tutorial;

import org.lwjgl.*;
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
    
    // The window handle
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
    <div className="relative min-h-screen flex flex-col bg-black font-sans overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_left,_rgba(0,255,136,0.02)_0%,_transparent_30%)]"></div>
      </div>
      
      <div className="relative z-10 flex-1 flex-col px-6 py-12 max-w-4xl mx-auto text-white">
        {/* Header */}
        <div className="mb-8">
          <Link href="/tutorials" className="text-[#00ff88]/50 hover:text-[#00ff88] transition-colors text-sm mb-4 inline-block">
            ← Back to Tutorials
          </Link>
          <h1 className="text-3xl font-bold text-[#00ff88] mb-4">Creating a Java Game Window from Scratch</h1>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <span>📂 Java Game Development</span>
            <span>📊 Beginner</span>
            <span>⏱ 45 minutes</span>
            <span>© Andrew Groves</span>
          </div>
        </div>
        
        {/* Table of Contents */}
        <div className="mb-8 bg-[#111] border border-[#00ff88]/10 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#00ff88] mb-3">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-zinc-300">
            <p>1. Introduction</p>
            <p>2. Setting Up Your Environment</p>
            <p>3. Project Structure</p>
            <p>4. Maven Configuration</p>
            <p>5. The Main Java Code</p>
            <p>6. Code Explanation</p>
            <p>7. Running the Tutorial</p>
            <p>8. Next Steps</p>
          </div>
        </div>
        
        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">1. Introduction</h2>
            <p className="text-zinc-300 mb-4 leading-relaxed">
              Welcome to your first step into Java game development! While many developers start with 
              game engines like Unity or Unreal, understanding how to create a game window from scratch 
              gives you invaluable insight into what happens under the hood.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              In this tutorial, we'll use <span className="text-[#00ff88] font-medium">LWJGL (Lightweight Java Game Library)</span>, 
              which provides access to native APIs like OpenGL, OpenAL, and GLFW — the same foundation used by Minecraft.
            </p>
          </section>
          
          {/* Setting Up */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">2. Setting Up Your Environment</h2>
            <ol className="list-decimal list-inside space-y-3 text-zinc-300">
              <li><span className="font-medium text-white">JDK 17+</span> — Download from <a href="https://adoptium.net/" className="text-[#00ff88] underline">Adoptium</a></li>
              <li><span className="font-medium text-white">IDE</span> — <a href="https://www.jetbrains.com/idea/" className="text-[#00ff88] underline">IntelliJ IDEA</a> or <a href="https://code.visualstudio.com/" className="text-[#00ff88] underline">VS Code</a></li>
              <li><span className="font-medium text-white">Build Tool</span> — Maven for dependency management</li>
              <li><span className="font-medium text-white">LWJGL</span> — Configured through Maven</li>
            </ol>
          </section>
          
          {/* Project Structure */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">3. Project Structure</h2>
            <pre className="text-xs text-zinc-200 font-mono leading-relaxed">
{`java-game-window-tutorial/
├── src/
│   └── main/
│       └── java/
│           └── com/
│               └── xelforo/
│                   └── tutorial/
│                       └── Main.java
├── pom.xml`}
            </pre>
          </section>
          
          {/* Maven Config */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">4. Maven Configuration (pom.xml)</h2>
            <div className="relative">
              <pre className="text-xs text-zinc-200 font-mono leading-relaxed overflow-x-auto" dangerouslySetInnerHTML={{ __html: pomXmlCode }} />
            </div>
          </section>
          
          {/* Java Code */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">5. The Main Java Code</h2>
            <pre className="text-xs text-zinc-200 font-mono leading-relaxed overflow-x-auto">
              {javaCode}
            </pre>
          </section>
          
          {/* Code Explanation */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">6. Code Explanation</h2>
            <div className="bg-[#111] border border-[#00ff88]/10 rounded-xl p-5">
              <ul className="list-disc list-inside space-y-2 text-zinc-300 text-sm">
                <li><span className="font-medium text-white">GLFW Initialization</span> — Window creation and input handling</li>
                <li><span className="font-medium text-white">Window Creation</span> — 800x600 window with title</li>
                <li><span className="font-medium text-white">OpenGL Context</span> — Making the context current for rendering</li>
                <li><span className="font-medium text-white">Game Loop</span> — Clear, render, swap buffers, poll events</li>
                <li><span className="font-medium text-white">Rendering</span> — Immediate mode OpenGL triangle</li>
                <li><span className="font-medium text-white">Cleanup</span> — Proper shutdown of GLFW</li>
              </ul>
            </div>
          </section>
          
          {/* Running */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">7. Running the Tutorial</h2>
            <ol className="list-decimal list-inside space-y-3 text-zinc-300">
              <li>Save the files in the correct structure</li>
              <li>Run: <code className="bg-[#00ff88]/10 text-[#00ff88] px-2 py-0.5 rounded text-sm">mvn clean compile exec:java -Dexec.mainClass="com.xelforo.tutorial.Main"</code></li>
              <li>You should see a window with a colorful triangle! Press ESC to exit.</li>
            </ol>
          </section>
          
          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-semibold text-[#00ff88] mb-4">8. Next Steps</h2>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              <li>Learn Modern OpenGL (shaders, VBOs)</li>
              <li>Add Texture Mapping</li>
              <li>Implement a Camera System</li>
              <li>Add Game Objects</li>
              <li>Explore Game Physics</li>
              <li>Check out <Link href="/tools/xelzip" className="text-[#00ff88] underline">Xelzip</Link></li>
            </ul>
          </section>
          
          {/* GitHub Link */}
          <section className="bg-[#111] border border-[#00ff88]/15 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Complete Working Example</h3>
            <p className="text-zinc-400 text-sm mb-4">Find the full source code on GitHub. Fork it and start building!</p>
            <a href="https://github.com/xelforo/java-game-window-tutorial" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#00ff88]/15 hover:bg-[#00ff88]/25 border border-[#00ff88]/40 text-[#00ff88] font-medium rounded-xl transition-all duration-300">
              View on GitHub →
            </a>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-[#00ff88]/10 text-center">
          <p className="text-zinc-500 text-sm">Tutorial by ©Andrew Groves • Xelforo.io • Learn. Build. Share.</p>
        </div>
      </div>
    </div>
  );
}
