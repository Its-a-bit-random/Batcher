# Installing

## The package

To install the package run the following using your package manager:

::: code-group

```npm
npm install @rbxts-its-a-bit-random/batcher
```

:::

::: warning
This package has only been test installed with NPM, if you notice any issues using another package manager please open an issue!
:::

::: tip
Everything past this point only applies if you **HAVENT** added the Its-a-bit-random org to your Rojo project and your tsconfig file!
:::

## Rojo Config

Once you have installed the package, you will need to add the `rbxts-its-a-bit-random` org into your rojo project like so:

```json
"ReplicatedStorage": {
	"$className": "ReplicatedStorage",
	"rbxts_include": {
		"$path": "include",
		"node_modules": {
			"$className": "Folder",
			"@rbxts": {
				"$path": "node_modules/@rbxts"
			},
			"@rbxts-its-a-bit-random": { // [!code ++] [!code focus]
				"$path": "node_modules/@rbxts-its-a-bit-random" // [!code ++] [!code focus]
			} // [!code ++] [!code focus]
		}
	},
	"TS": {
		"$path": "out/Shared"
	}
},
```

## Typescript Config

You also need to add `rbxts-its-a-bit-random` to your typescript type roots like so:

```json
{
	"compilerOptions": {
		"allowSyntheticDefaultImports": true,
		"downlevelIteration": true,
		"jsx": "react",
		"jsxFactory": "React.createElement",
		"jsxFragmentFactory": "React.Fragment",
		"module": "commonjs",
		"moduleResolution": "Node",
		"noLib": true,
		"resolveJsonModule": true,
		"forceConsistentCasingInFileNames": true,
		"moduleDetection": "force",
		"strict": true,
		"target": "ESNext",
		"typeRoots": ["node_modules/@rbxts"], // [!code --] [!code focus]
		"typeRoots": ["node_modules/@rbxts", "node_modules/@rbxts-its-a-bit-random"], // [!code ++] [!code focus]

		"rootDir": "Source",
		"outDir": "out",
		"baseUrl": "Source",
		"incremental": true,
		"tsBuildInfoFile": "out/tsconfig.tsbuildinfo",

		"experimentalDecorators": true,
		"plugins": []
	}
}
```
