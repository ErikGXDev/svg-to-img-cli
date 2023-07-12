# A simple command line interface to convert a .svg file to a .png file.

## How to use

Get the latest executable / build it yourself

Run the executable in the command line:

```
executable -i input.png -o output.svg -w 1920
```

## Parameters

| Parameter        | Default Value | Description                                                                           |
| ---------------- | ------------- | ------------------------------------------------------------------------------------- |
| -i \<file>       | /             | Your input file. Required parameter.                                                  |
| -o \<file>       | /             | Your output file. Required parameter.                                                 |
| -w \<width>      | /             | Width of the png in pixels. The height will be fit to that width. Required parameter. |
| -bg \<css color> | #000000       | Background color of the png. Optional parameter.                                      |

# How to build

Install `pkg` with `npm i pkg -g`
Run `npm run build`
