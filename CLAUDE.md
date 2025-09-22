# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a TypeScript-based MCP (Model Context Protocol) server template built with Bun runtime and Hono web framework. The project provides a foundation for creating MCP servers with multi-user support, browser automation capabilities, and comprehensive logging.

## Development Commands

### Core Development
- `bun dev` - Start development server with file watching
- `bun start` - Start production server
- `bun test` - Run tests
- `bun run typecheck` - Run TypeScript type checking
- `bun run lint` - Run ESLint on source files
- `bun run format` - Format code with Prettier

### Process Management (PM2)
- `bun run pm2:start` - Start server with PM2
- `bun run pm2:stop` - Stop all PM2 processes
- `bun run pm2:restart` - Restart all PM2 processes
- `bun run pm2:logs` - View logs (last 1000 lines)
- `bun run pm2:status` - Check PM2 process status
- `bun run pm2:delete` - Delete all PM2 processes

## Architecture

### Core Structure
- `src/main.ts` - Main server entry point using Hono and mcp-handler
- `src/mcp/` - MCP protocol schemas and definitions
- `src/utils/` - Shared utilities (logger, file operations, config, environment)
- `src/services/` - Business logic services
- `src/storage/` - Storage providers and abstractions
- `src/types/` - TypeScript type definitions

### Key Components
- **MCP Handler**: Uses `mcp-handler` package for MCP protocol implementation
- **Hono Framework**: Web framework for HTTP endpoints
- **Logger**: Winston-based logging with module-specific loggers
- **Storage**: Abstract storage provider pattern with file-based implementation
- **Configuration**: Environment-based configuration with .env support

### MCP Server Features
- Test tool endpoint at `/mcp/*`
- Health check endpoint at `/health`
- Welcome/info endpoint at `/`
- Multi-user support with local file storage
- Browser automation capabilities via Puppeteer
- File upload and processing with configurable limits

### Environment Configuration
The server requires a `.env` file (see `.env.example`):
- Server settings (PORT, NODE_ENV)
- Browser automation config (headless mode, timeouts)
- Logging configuration
- File processing
- Security settings (encryption keys)

## Technology Stack
- **Runtime**: Bun
- **Framework**: Hono
- **MCP**: @modelcontextprotocol/sdk + mcp-handler
- **Browser Automation**: Puppeteer
- **Logging**: Winston
- **Type Safety**: TypeScript with strict mode
- **Process Management**: PM2
- **Session Storage**: Local file storage