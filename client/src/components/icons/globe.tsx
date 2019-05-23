export const GlobeIcon = ()=>{
    return(
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAvqSURBVHhe7VwLcBTHEZXzraSSVJJKpSoJQSdBcEyCHQecGEP4YyCAQ8DYGIqQpAzGX4zxBzBGMdiAjQmWpb2TkJAQ4ivAfAQIkAEJEIifAROQAJM4CXaCASPtSXY+Lib9RjOrudXouFvtfUSuq17ptDvb3dM309PdM3tJCUpQghKUoAQlKEFJST3T2OfaZ9W0a+et75ya6e/r8dbek2yYw1K8/n4pRv0d9PmWjkXsC6L5/zkVsc/CKGSkZ8hA61MMf7XHMP9Nn1lQGOan1PY8/d3q8ZppnkyzR/v0a18UXG9wgtEwmrxmgcfw1zQxjlMYZj393ZBqmMNvSGMmL7z6dRotM8hw7zfpvNsw/FdI1oI2vvrvCfGtlxoM559DqNV2NoIgI/6LjJndPr2+jVCnFRFjN3m8dePIp13UdS6aoC/PDz/bOZt9XmgX35Sa/XFb8m97dJ2JJejLPOnx1d0m1IxPSjFqB5Oyl+3Kxw0M8xOa2hOEuvFFCClIwWtaxeMMNK3zEHMK1WNMFJqQQoZO0XgGuZni72SzL4texIi48cxCu3KdF7/HBq44yH606J8B14PhluwPWarX5J9vX/xXdu+at9ivVpex3oUnrOs6dMr5gPVYepKev6S9HwxkxH0xNSIp4FUVQkdf2j2PHX23K8fBcz3Y3LKX2I9zGgz5UzLM3csP8899lx1l6XufZ8UnRrLD57rz9m8eG8P/l89LjF2/yZKhAkYrOTmMt4Gs0eu2atsFheHfGJP0kIw1VVWkve8qN4i988Ceqn5s9dHfkqG6sfKqu1nh4QnsyLt3aduq2HTiPnbP6j2BHVYwau22gPbgP2HTan6vna+Wj+CxbxazDlkfNXlWBWaR6FZ0KDmzbqC6YEBZ3/4pAZ1pKbz7n2Y/8AXveJ/C49pn17w9ju08Ndj6H5+n7chkP89/l8+GRQeetGaCBcN8RHQvsvT9jPrv0qLxoSr8xZ2vBXTACcqqBrKHi5fT1H6b/w/fp8poDuuPjW7CKxgOnfsF/7v79EDWraDK4oPMJdlbd7voZuSIAtJStQMTi1c2UTJc5FY+wW7NeZ/zw8KDqXi90Qdgaq448qCWZyiAi+i46GIjT8NfHdFiBC0a96sd6EWjBM5bp1yoyKx4lrsAyRMdwsKgytEBBobx9p/pzaf7xOIV5PPK2fhNRWxvdT+tLB0yK56z8Tani+66SzfnXvoq+YkLUlCHrCtsw/EHtEqFgykli2wd8LPHtyxpcs0OrMDwY1i87PceWFcS0iIlgYXGet4w6z2ZHyeLbrtHNHVnqkrOKE3XKhMuKs70YT0L32nsgEtIe+uPWnk6wP9KF9IAs0B02x3qmHnxKzR9L0kBd+SdZ5Vne2qVcYKMiqmK8u6gna+GrTr6O608HWbvesV6lhaU/yb7rnpE91tOKZn+yapyC/akaZVwipk0WlT+bqHrkjM0wntrZUpsI3/7+t4ZbOp2IyDjQZIgut9yorDlnGR815JqvkrqlHECBNZ35p+zFHcbM0oXauVKPLq5UPscoQ4zT5jAOSVn1XZVGbsR8wFlVQPY9B0Z5HsuqEq7jsEr92vlSxw404sH2aPXbeHolPMP61mPt26sMINzUistN2df5mmZTpFwgNABxQPJN5JoLltpDk9uzbOepYVzhzCDcyKH+nfJEEm9Tmi4WHp4YkiBshvosfRPWh2aAzIb63nD/LR9+uWvCVOETykZtR1UZZorFjgBwgyVd6SAKRlOTAgE+GSjdrAwR/jk8ZkPSUbIFuDwdQKdIPvA5EYlIwxUgnQ6NAekp43Pm/OFOcInlL4lI0T9OmFOgQWkUcnIAtmOTgc7EF3M2T0noBBMNqgQ5gifKLneLxk9uLFIK9Qp4Nwl70gDhVzkzDo9JJCNDF21t+nzhv+KMEf4hIclo1k7X9UKDgcIalF8yDrwVFNFI4wXSl/nOsAfTi5ZzEauKeWFXanbc9u92ueANjk13xQmCZ3wkMok/+BjljD4wtJTQ67rnDe/cy9bSFG+bIdFCCUoXQEg0sBighBsX3Vfq0KNgkjBoYe5bgi47c9Y8NX8TJgldGr7xtUUlYlauIRREAAjlsNUHLFmJ/cd8j6AIgEqwHh2ckkuvwZD/mb9hkbFooynt2VzPcYpOsDfrT02lhKE+QFtVSR76wYJs4ROKRn+TiqT18rTAoY8piMWAnU3TM2R7WFKTuUkfh2OGumgei9agK67Tv+SbT3564A4FEbskvfngLY2jBRmCZ1SM83uKpNXy2dxoageSyMBw1aXWW1uy71A07s/vz68aKd1HYDRKs82FF+xI6feiybg+/AlPlS8Qntfj9rfC7OETqk+s5vKZMepoXwP9of0LSKTgCEwTe0p2X1rdvDrc2lKq9eBJ7bk89wTKaH9XjTxSPEyXoUJ3Rc7MKB9CmPRwOqJkg+G/AvkdAetPKAIaQR835h1m7X3sA2gu67iJ7l/Y90LTmvvuQXMELVwAJ8+cEVlQBsF4U9hFBRVJhuOj+KjDuGAet1NYDRjYx6hDnxsl8V/se7B396/dntAezeAWYWsSJbodJvz2MYVZgmd2nprvqEyWX54PBcAzCubzeaX/yFASEsxZOU+65SBhKxU35l/lv8P1xBYem854FZUmbtOD7JOUlhwEsaA1P3fN/ZNCxC0+ODjgUIcAi5h0tY8GgENxztUIOwZQVPtqZIc65pbKWD/5Uf4bh72h1WZgFreB3DSVpgkPMLhG8kE0bsqBLGdKsQpoKzK1w57sB7KlmcoQOah8lWBUEe2wyAS5gifyIA5khHyRFWIGztpGAUqz1DRz4UwCKV8HW/AlmqWC3OET1i+JSOsvHI0wBepGzBOYT8cFCqMime0/MJBsC8Ps022o0E0V5gjfLKvxDi0AwGoXKjXnQInCezKh4o+hce0PEMF6ptYMPS8lUqRz99fmMMZpeCtIMEM+wVSCBJxS4hDoPKrKh4OguWuoQIbTvb9bZxPlPdx4KjNgmtfEqZwRqjISoZd8s5b09itfDaccywqEH6ofJBV4Nga3EuQrcomUKtMAPaHrfuGf6Mwg3MiJreqAmU8iLhNve4U+QcfDehAwaGJPHRB0Gy/J4FAG3m3ymeAUjHHl2zPxXWQJS75HEIpnLpobGOOEGZoGRGjY5KpdPwBB3JagCErK3jWgbocPqv3ULyQ9ToVC/bMDGgHIItBfivbbDgxqkkbO1BhUvmiTGfdN/xXXDvqpq7GWH1xljm8akZwBFvRZb1OdhIVHVlntEM9JYuqkK6NBOqSsi2AUWvbZpgnut9ywiFsGoXvSeaj1pXYdq4iCyT6uZWTuL/EOUBdG3wJatA9Z/fL2nYATqbCV6oGRC3TamOY9ale/7dF990hnCGWAqCsk9cKIoHhRbt4qQ3bBzgkhKKAl+LE5kpmiB7UEQ2gzI9XK6x2hrlQdNs9ahiF/tOWkDgAZoJ6QhZFXxxr07WVULceMGJxBE4tChMud8g2vyW67S4l+/y96NuJi9e5cMzEXoBobnpL4OSqbJu+d7o2FPNkmuNFdyND5AsL7EKjDSwAsn4ngaJEsMUIJSq53YDqjq4N30Rn7CbR1cgQDtuQIOu8YCwgDSGB6riunQq8QoG2L++eq71PYctHrp5KDUZ4n4Km8idaRaIAdREIyByCADEf/GWTYilAbgm/ECK6Fx2iJHtMrPwhSv3PbvfxDSzdfR2w39Fsimf4Z4luRZfET5bolWolcPUstBOib2+2TrFWgiK8siu6EjsiRabES3gTKmghNOLCeJJwIBv1M52ycQV80Yb5vFA7vig1q74L+ZSzWsXjANggoi96gFA3PonHiYa5TNeBWAIn7lvVrxnh19doganSdSaqMMwPkr3+UUKt1kUoQNCUnkSdsN7yjBoos6C/L7rytlGsCZVdWmAmRGNE8vdaDHNai97viGfivxlomBmYWjoDOELDaMsn9EtKY58Rom58auszO1JK+FiK11xFI+cEGfW6+TUZ/z9ksGr6vB6ZEH7tMq7iuZgSjR78eBmMkmz4e6cYtUPlT4DiGn4eNH5+silBCUpQghKUoATFkpKS/gc0rumpHWC1EQAAAABJRU5ErkJggg=="></img>
    );
};