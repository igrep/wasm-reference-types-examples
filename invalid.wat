(module
  (func (export "hello") (param externref)
  ;; externref を i43.add に渡すことはできない！
  (i32.add
    (local.get 0)
    (i32.const 0x42))))
