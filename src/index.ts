export default function (context: any) {
  context.setSolutionInfo({
    key: 'test',
    name: '测试',
    base: 'mwa',
  });
  context.addInput({
    key: 'test',
    label: 'test',
    isObject: true,
    items: [
      {
        key: 'test1',
        label: 'test1',
        type: ['string'],
      },
    ],
  });
}
