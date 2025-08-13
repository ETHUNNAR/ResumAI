# NPM Windows Installation Guide

## Issue Resolution

This document addresses the "EPERM: operation not permitted" errors that can occur during npm operations on Windows, particularly with packages like Tailwind CSS.

### Problem

On Windows systems, npm can encounter file locking issues during installation and cleanup operations. This commonly manifests as errors like:

```
npm warn cleanup Failed to remove some directories
npm warn cleanup EPERM: operation not permitted, unlink '[file path]'
```

These errors occur because Windows sometimes keeps files locked even when they're not actively in use, or when multiple processes try to access the same files.

### Solution

A `.npmrc` file has been added to the project root with the following configurations to address these issues:

```
# Increase the timeout for file operations to allow locks to be released
force=true
loglevel=error

# Retry operations that might fail due to file locks
fetch-retry-mintimeout=20000
fetch-retry-maxtimeout=120000

# Reduce the likelihood of file locking issues
unsafe-perm=true

# Disable package-lock for less file contention
package-lock=false

# Avoid issues with long file paths on Windows
long-paths=true
```

### Additional Recommendations

If you continue to experience npm issues on Windows:

1. **Close unnecessary applications**: Ensure no other applications (like code editors or terminals) are accessing the project files during npm operations.

2. **Run as Administrator**: Try running your terminal or command prompt as Administrator.

3. **Temporary antivirus exclusion**: Temporarily disable antivirus scanning for the project directory during npm operations.

4. **Clear npm cache**: Run `npm cache clean --force` before installations.

5. **Use a different terminal**: If using VS Code's integrated terminal, try using Windows Command Prompt or PowerShell directly.

6. **Increase Node.js memory limit**: If dealing with large packages, set `NODE_OPTIONS=--max_old_space_size=4096` before running npm commands.

7. **Consider using Yarn**: As an alternative to npm, Yarn sometimes handles Windows file locking better.

## For CI/CD Environments

If you're setting up CI/CD pipelines that run on Windows:

1. Add appropriate retry mechanisms for npm operations
2. Ensure proper cleanup between builds
3. Consider using Docker containers to isolate the build environment

## References

- [npm documentation on configuration](https://docs.npmjs.com/cli/v9/configuring-npm/npmrc)
- [Node.js Windows limitations](https://nodejs.org/api/cli.html#cli_max_old_space_size_size_in_megabytes)