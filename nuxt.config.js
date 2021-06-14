module.exports = {
    env: {
        // ENV variables
        three: {
            // Background color: false for transparent background
            background: 0x222222,
            camera: {
                near: 1,
                far: 3000
            }
        }
    },
    target: 'static',
    css: [
        "@/assets/css/main.scss"
    ],
    server: {
        host: '0.0.0.0'
    },
    build: {
        transpile: ["three"],
        extractCSS: true,
        terser: {
            terserOptions: {
                compress: {
                    drop_console: true
                },
                mangle: {
                    toplevel: true,
                },
            }
        },
    },
    buildModules: [
        '@nuxtjs/device',
    ],
    head: {
        meta: [
            { charset: "utf-8" },
            { name: "viewport", content: "width=device-width, initial-scale=1" }
        ]
    },
    generate: {
        async routes() {
            return [];
        }
    }
}
