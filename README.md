# antd-daterange
Date range picker based on ant-design.

[Demo](https://codepen.io/hdwong/pen/xxWwxyj)

## Install
Yarn
```
yarn add antd-daterange
```

NPM
```
npm install antd-daterange
```

## Usage
```js
import DateRange from "antd-daterange";

export default () => {
  const [ value, setValue ] = useState();

  return (
    <DateRange value={value} onChange={setValue} />
  );
}
```

## Screenshot
![SCREENSHOT](https://user-images.githubusercontent.com/5576253/177102435-837611be-309f-4f89-a005-b0cb04b8f4c8.png)
