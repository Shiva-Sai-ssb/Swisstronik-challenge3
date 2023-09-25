# Swisstronik Challenge #3

**Contract Address:** `0xf84Df872D385997aBc28E3f07A2E3cd707c9698a`

### Network: Swisstronik

#### Value retrieved from RPC call:

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://json-rpc.testnet.swisstronik.com/'
}

Response:
Storage Value at Slot 0: 0x0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4
```

### Network: Sepolia

#### Value retrieved from RPC call:

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://rpc.sepolia.org'
}

Response:
Storage Value at Slot 0: 0x0x0000000000000000000000000000000000000000000000000000000000000000
```

### Network: Mumbai

#### Value retrieved from RPC call:

```shell
{
  contract: '0xf84Df872D385997aBc28E3f07A2E3cd707c9698a',
  slotNumber: 0,
  rpcURL: 'https://polygon-mumbai.blockpi.network/v1/rpc/public'
}

Response:
Storage Value at Slot 0: 0x0x0000000000000000000000000000000000000000000000000000000000000000
```

## Conclusion

On the Swisstronik network, when querying slot #0 of contract address `0xf84Df872D385997aBc28E3f07A2E3cd707c9698a`, we receive an encrypted hexadecimal message `0xc73e7f645a2bf1365a0903afa03a2cb5029ba989df7844b0fe7751b1ba918ea4`, representing "Hello Swisstronik!!".
On the Sepolia and Mumbai networks, the returned value is `0x0x0000000000000000000000000000000000000000000000000000000000000000`, which is the default value when no value is present.

The difference in values is due to Swisstronik having a contract at that address, while Sepolia only has an Externally Owned Account (EOA) with no contract. Mumbai may have a contract, but it may not have storage variables at slot #0 in its smart contract code. Therefore, Sepolia and Mumbai return the default value `0x0x0000000000000000000000000000000000000000000000000000000000000000` due to the absence of stored values.
