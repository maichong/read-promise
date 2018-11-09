
declare namespace ReadPromise {
  interface Options {
    /**
     * What to write to stdout before reading input.
     */
    prompt: string;
    /**
     * The default value if the user enters nothing.
     */
    default?: string;
    /**
     * Replace silenced characters with the supplied character value.
     */
    replace?: string;
    /**
     * Readable stream to get input data from. (default process.stdin)
     */
    input?: any;
    /**
     * Writeable stream to write prompts to. (default: process.stdout)
     */
    output?: any;
    /**
     * Number of ms to wait for user input before giving up.
     */
    timeout?: number;
    /**
     * Allow the user to edit the default value.
     */
    edit?: boolean;
    /**
     * Treat the output as a TTY, whether it is or not.
     */
    terminal?: boolean;
    /**
     * Don't echo the output as the user types it.
     */
    silent?: boolean;
  }
}

declare function ReadPromise(options: string | ReadPromise.Options): Promise<string>;

export = ReadPromise;
