// Simple test script for the formatSize function
import { formatSize } from './app/lib/utils';

// Test with different file sizes
const testSizes = [
  0,                    // 0 Bytes
  500,                  // 500 Bytes
  1023,                 // 1023 Bytes
  1024,                 // 1 KB
  1500,                 // 1.46 KB
  1024 * 1024,          // 1 MB
  1024 * 1024 * 1.5,    // 1.5 MB
  1024 * 1024 * 10,     // 10 MB
  1024 * 1024 * 1024,   // 1 GB
  1024 * 1024 * 1024 * 2.5, // 2.5 GB
  1024 * 1024 * 1024 * 1024, // 1 TB
];

// Test the function
testSizes.forEach(size => {
  console.log(`${size} bytes = ${formatSize(size)}`);
});