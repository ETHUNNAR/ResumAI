import clsx, {type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB, TB)
 * @param bytes - The size in bytes to format
 * @param decimals - Number of decimal places to include (default: 2)
 * @returns A formatted string with the appropriate size unit
 */
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

export function formatSize(bytes: number, decimals: number = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  // Determine the appropriate unit by calculating how many times we can divide by 1024
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  // Calculate the value in the appropriate unit
  const value = bytes / Math.pow(k, i);
  
  // Format the value with the specified number of decimal places
  return `${parseFloat(value.toFixed(decimals))} ${sizes[i]}`;
}

// Test cases for the formatSize function
// These are commented out but can be uncommented for testing
/*
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

// Expected outputs:
// 0 bytes = 0 Bytes
// 500 bytes = 500 Bytes
// 1023 bytes = 1023 Bytes
// 1024 bytes = 1 KB
// 1500 bytes = 1.46 KB
// 1048576 bytes = 1 MB
// 1572864 bytes = 1.5 MB
// 10485760 bytes = 10 MB
// 1073741824 bytes = 1 GB
// 2684354560 bytes = 2.5 GB
// 1099511627776 bytes = 1 TB
*/

export const generateUUID = () => crypto.randomUUID();