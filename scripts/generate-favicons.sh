#!/bin/bash

# Create the scripts directory if it doesn't exist
mkdir -p scripts

# Generate favicon.ico (16x16, 32x32)
svgexport public/favicon.svg public/favicon-16x16.png 16:16
svgexport public/favicon.svg public/favicon-32x32.png 32:32
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico

# Generate apple-touch-icon.png (180x180)
svgexport public/favicon.svg public/apple-touch-icon.png 180:180

# Generate android-chrome icons
svgexport public/favicon.svg public/android-chrome-192x192.png 192:192
svgexport public/favicon.svg public/android-chrome-512x512.png 512:512

# Generate safari-pinned-tab.svg (monochrome version)
cp public/favicon.svg public/safari-pinned-tab.svg

# Clean up temporary files
rm public/favicon-16x16.png public/favicon-32x32.png 