export default[
    {
      id: 1,
      name: 'Free',
      cost: 0,
      offerings: [
        { value: 'Take 3 free Mock Interviews!!', isAvailable: true },
        { value: 'Unlimited Retake Interview', isAvailable: true },
        { value: 'Practice Questions', isAvailable: false },
        { value: 'Access to Exclusive content', isAvailable: false },
        { value: 'Email Support', isAvailable: false },
      ],
    },
    {
      id: 2,
      name: 'Yearly',
      cost: 800,
      paymentLink: 'https://buy.stripe.com/test_cN23e60rTaRdbIYcMM',
      offerings: [
        { value: 'Take 3 free Mock Interviews!!', isAvailable: true },
        { value: 'Unlimited Retake Interview', isAvailable: true },
        { value: 'Practice Questions', isAvailable: true },
        { value: 'Access to Exclusive content', isAvailable: true },
        { value: 'Email Support', isAvailable: true },
      ],
    },
  ];
  