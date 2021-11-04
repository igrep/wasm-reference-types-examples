(module
  (import "imports" "append" (func $append (param externref i32 i32)))
  (import "imports" "plus" (func $plus (param externref externref) (result externref)))

  (memory (export "memory") 1)

  ;; 線形メモリーにおける 0x42 の箇所に
  ;; 出力する文字列を配置
  (data (i32.const 0x42) "Hello, Reference Types!")

  ;; 引数として externref を受け取る関数
  (func (export "hello") (param externref)
    (call $append
      ;; どの要素に追記するかを externref の値で指定
      (local.get 0)
      ;; 次の二つの引数で、Wasmの線形メモリーに
      ;; 書かれた文字列（先頭のアドレスと長さ）を指定
      (i32.const 0x42)
      (i32.const 24)))

  (func (export "add3") (param i32) (result i32)
    (i32.add (local.get 0) (i32.const 3)))

  (func (export "twice") (param externref) (result externref)
    (call $plus (local.get 0) (local.get 0)))
)
