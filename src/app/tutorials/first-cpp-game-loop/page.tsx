import Link from "next/link";

const cppCode = `#include <SDL2/SDL.h>
#include <iostream>
#include <cstdint>

const int WINDOW_WIDTH = 800;
const int WINDOW_HEIGHT = 600;

class Game {
private:
    SDL_Window* window = nullptr;
    SDL_Renderer* renderer = nullptr;
    bool running = true;

    // Timing
    uint64_t previousTime = 0;
    double deltaTime = 0.0;
    const double FIXED_TIMESTEP = 1.0 / 60.0;
    double accumulator = 0.0;

    // Game state
    float playerX = 400.0f;
    float playerY = 300.0f;
    float playerSpeed = 300.0f; // pixels per second

public:
    bool init() {
        if (SDL_Init(SDL_INIT_VIDEO) < 0) {
            std::cerr << "SDL init failed: " << SDL_GetError() << std::endl;
            return false;
        }

        window = SDL_CreateWindow("C++ Game Loop",
            SDL_WINDOWPOS_CENTERED, SDL_WINDOWPOS_CENTERED,
            WINDOW_WIDTH, WINDOW_HEIGHT, SDL_WINDOW_SHOWN);

        renderer = SDL_CreateRenderer(window, -1,
            SDL_RENDERER_ACCELERATED | SDL_RENDERER_PRESENTVSYNC);

        if (!window || !renderer) {
            std::cerr << "Window/renderer creation failed" << std::endl;
            return false;
        }

        previousTime = SDL_GetPerformanceCounter();
        return true;
    }

    void handleInput() {
        SDL_Event event;
        while (SDL_PollEvent(&event)) {
            if (event.type == SDL_QUIT) {
                running = false;
            }
        }

        // Get keyboard state for continuous input
        const Uint8* keys = SDL_GetKeyboardState(nullptr);

        if (keys[SDL_SCANCODE_W] || keys[SDL_SCANCODE_UP])
            playerY -= playerSpeed * deltaTime;
        if (keys[SDL_SCANCODE_S] || keys[SDL_SCANCODE_DOWN])
            playerY += playerSpeed * deltaTime;
        if (keys[SDL_SCANCODE_A] || keys[SDL_SCANCODE_LEFT])
            playerX -= playerSpeed * deltaTime;
        if (keys[SDL_SCANCODE_D] || keys[SDL_SCANCODE_RIGHT])
            playerX += playerSpeed * deltaTime;

        // Clamp to screen bounds
        if (playerX < 0) playerX = 0;
        if (playerX > WINDOW_WIDTH - 20) playerX = WINDOW_WIDTH - 20;
        if (playerY < 0) playerY = 0;
        if (playerY > WINDOW_HEIGHT - 20) playerY = WINDOW_HEIGHT - 20;
    }

    void update() {
        // Game logic goes here
        // This runs at a fixed 60 FPS timestep
    }

    void render() {
        // Clear screen (dark blue)
        SDL_SetRenderDrawColor(renderer, 15, 15, 30, 255);
        SDL_RenderClear(renderer);

        // Draw player (white square)
        SDL_SetRenderDrawColor(renderer, 74, 158, 255, 255);
        SDL_Rect player = {
            (int)playerX, (int)playerY, 20, 20
        };
        SDL_RenderFillRect(renderer, &player);

        SDL_RenderPresent(renderer);
    }

    void run() {
        while (running) {
            // Calculate delta time
            uint64_t currentTime = SDL_GetPerformanceCounter();
            deltaTime = (double)(currentTime - previousTime)
                / SDL_GetPerformanceFrequency();
            previousTime = currentTime;

            // Fixed timestep game loop
            accumulator += deltaTime;
            while (accumulator >= FIXED_TIMESTEP) {
                handleInput();
                update();
                accumulator -= FIXED_TIMESTEP;
            }

            render();
        }
    }

    void cleanup() {
        SDL_DestroyRenderer(renderer);
        SDL_DestroyWindow(window);
        SDL_Quit();
    }
};

int main(int argc, char* argv[]) {
    Game game;

    if (!game.init()) {
        return -1;
    }

    game.run();
    game.cleanup();

    return 0;
}`;

const cmakeCode = `cmake_minimum_required(VERSION 3.16)
project(GameLoop)

set(CMAKE_CXX_STANDARD 17)

# Find SDL2
find_package(SDL2 REQUIRED)

add_executable(game main.cpp)

target_link_libraries(game SDL2::SDL2)`;

export default function CppGameLoopTutorial() {
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
          <h1 className="text-3xl font-bold text-[#4a9eff] mb-4">Your First C++ Game Loop</h1>
          <div className="flex flex-wrap gap-4 text-sm text-[#8b8fa3]">
            <span>📂 C++ Game Development</span>
            <span>📊 Beginner</span>
            <span>⏱ 30 minutes</span>
            <span>© Andrew Groves</span>
          </div>
        </div>

        <div className="mb-8 bg-[#111118] border border-white/5 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-[#4a9eff] mb-3">Table of Contents</h2>
          <div className="grid sm:grid-cols-2 gap-2 text-sm text-[#8b8fa3]">
            <p>1. What is a Game Loop?</p>
            <p>2. Setting Up SDL2</p>
            <p>3. The Fixed Timestep Pattern</p>
            <p>4. Input Handling</p>
            <p>5. Update & Render</p>
            <p>6. Building & Running</p>
            <p>7. Next Steps</p>
          </div>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">1. What is a Game Loop?</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              Every game, from Minecraft to Call of Duty, runs on a game loop. It's the heartbeat of your game — a continuous cycle that processes input, updates game state, and renders the screen, typically 60+ times per second.
            </p>
            <div className="bg-[#111118] border border-white/5 rounded-lg p-4">
              <pre className="text-xs text-[#e8eaed] font-mono leading-relaxed">
{`while (game_is_running) {
    process_input();
    update_game_state();
    render_graphics();
}`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">2. Setting Up SDL2</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              SDL2 (Simple DirectMedia Layer) is a cross-platform library for window creation, input handling, and 2D rendering. It's the same library used by Valve, Blizzard, and many indie games.
            </p>
            <div className="bg-[#111118] border border-white/5 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">Install SDL2:</h3>
              <div className="space-y-1 text-sm text-[#8b8fa3]">
                <p><strong className="text-white">Windows (vcpkg):</strong> <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">vcpkg install sdl2</code></p>
                <p><strong className="text-white">Mac (Homebrew):</strong> <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">brew install sdl2</code></p>
                <p><strong className="text-white">Linux (apt):</strong> <code className="bg-[#4a9eff]/10 text-[#4a9eff] px-1.5 py-0.5 rounded text-sm">sudo apt install libsdl2-dev</code></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">3. The Fixed Timestep Pattern</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              A naive game loop runs as fast as possible, but this causes problems — the game runs faster on better hardware. A <strong className="text-white">fixed timestep</strong> ensures the game logic runs at a consistent rate (e.g., 60 FPS) regardless of how fast the computer can render.
            </p>
            <div className="bg-[#111118] border border-white/5 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">How it works:</h3>
              <ul className="text-sm text-[#8b8fa3] space-y-1">
                <li>• Measure time since last frame (delta time)</li>
                <li>• Accumulate time until it reaches the fixed step (1/60th second)</li>
                <li>• Run update logic at fixed intervals</li>
                <li>• Render as fast as possible between updates</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">4. Complete Code</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">
              Here's a complete, working game loop with SDL2. It creates a window, handles keyboard input (WASD/Arrow keys), and renders a movable square.
            </p>
            <pre className="text-xs text-[#e8eaed] font-mono leading-relaxed overflow-x-auto">
              {cppCode}
            </pre>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">5. Building & Running</h2>
            <p className="text-[#8b8fa3] mb-4 leading-relaxed">Using CMake:</p>
            <pre className="text-xs text-[#e8eaed] font-mono leading-relaxed overflow-x-auto mb-4">
              {cmakeCode}
            </pre>
            <div className="bg-[#111118] border border-white/5 rounded-lg p-4">
              <p className="text-sm text-[#8b8fa3]">
                <strong className="text-white">Build commands:</strong>
              </p>
              <pre className="text-xs text-[#e8eaed] font-mono mt-2">
{`mkdir build && cd build
cmake ..
cmake --build .
./game`}
              </pre>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#4a9eff] mb-4">6. Next Steps</h2>
            <ul className="list-disc list-inside space-y-2 text-[#8b8fa3]">
              <li>Add sprite rendering with SDL_image</li>
              <li>Implement a simple entity component system</li>
              <li>Add collision detection</li>
              <li>Move to OpenGL for 3D rendering</li>
              <li>Add audio with SDL_mixer</li>
              <li>Implement a proper game state manager</li>
            </ul>
          </section>

          <section className="bg-[#111118] border border-white/5 rounded-xl p-6 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Complete Source Code</h3>
            <p className="text-[#8b8fa3] text-sm mb-4">Full project with CMake build files on GitHub.</p>
            <a href="https://github.com/pimpduckdev/cpp-game-loop-tutorial" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-[#4a9eff]/15 hover:bg-[#4a9eff]/25 border border-[#4a9eff]/30 text-[#4a9eff] font-medium rounded-lg transition-all duration-200 text-sm">
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
