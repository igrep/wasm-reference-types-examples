const output = document.getElementById("output");

async function main() {
  const imports = {
    "imports": {
      append(domNode, address, length) {
        const memory = new Uint8Array(
          instance.exports.memory.buffer
        );
        const data = memory.subarray(
          address,
          address + length
        );

        const decoder = new TextDecoder("utf-8");
        const text = decoder.decode(data);

        const textNode = document.createTextNode(text);
        domNode.appendChild(textNode);
      },
      plus: (a, b) => a + b,
    }
  };

  // Wasm モジュールの読み込み、コンパイル
  const response = await fetch("./example1.wasm");
  const wasmBytes = await response.arrayBuffer();
  const { instance } = await WebAssembly.instantiate(
    wasmBytes,
    imports
  );

  // DOM への参照を直接 Wasm モジュールの関数に渡す
  instance.exports.hello(output);

  // 記事では取り上げないが他にも色々試しておく
  console.log(instance.exports.add3(5));
  console.log(instance.exports.add3(output));
  console.log(instance.exports.twice(9));
  console.log(instance.exports.twice("ABC"));
  console.log(instance.exports.twice(output));
}

main().catch(e => {
  output.textContent += `${e}\n\nStack:\n${e.stack}`;
});
