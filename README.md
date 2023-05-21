# How to reproduce?

## 1. Create a new project
```bash
npm init -y
# or
yarn init
```

## 2. Add jest
```bash
npm install --save-dev jest
# or
yarn add --dev jest
```

## 3. To allow using `import` in tests, add `babel-jest` and `@babel/preset-env`
```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
# or
yarn add --dev babel-jest @babel/core @babel/preset-env
```