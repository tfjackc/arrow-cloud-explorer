/** @type {import('next').NextConfig} */

const nextConfig = {
    cleanDistDir: false,
    webpack(config) {
        // Enables the WebAssembly experiments
        config.experiments = {
            ...config.experiments,
            asyncWebAssembly: true,
            layers: true,
        };

        // Adds a rule for .wasm files
        config.module.rules.push({
            test: /\.wasm$/,
            type: 'webassembly/async',
        });

        return config;
    },
};

export default nextConfig;

