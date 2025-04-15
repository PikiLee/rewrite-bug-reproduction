import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    async rewrites() {
        return {
            beforeFiles: [
                {
                    source: '/:locale/about',
                    destination: '/:locale/real-about',
                },
            ],
        };
    },
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);