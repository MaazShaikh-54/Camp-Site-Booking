import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './FAQ.css'; 

const FAQ = () => {
  const faqs = [
    {
      question: 'Q. What should I carry?',
      answer: 'All the guests are suggested to carry government ID proof, hand sanitizer, water bottle and be in sports attire (Track pants and t-shirts). We also suggest you to carry carry- sun cap as we will be outdoors the whole day.',
    },
    {
      question: 'Q. Is there any medical facility at the camp?',
      answer: 'Yes, There is basic first aid available at camp. All the instructors also have a first aid kit around their waist at all times. Most of the CampSite instructors are also first aid trained.',
    },
    {
      question: 'Q. What is the cancellation policy?',
      answer: 'Once a booking is made, it cannot be cancelled. Therefore, guests are kindly requested to confirm their travel dates and the number of members before proceeding with the payment.',
    },
    {
      question: 'Q. What kind of accommodations are there?',
      answer: 'There are ground mattresses inside the tents, and blankets are provided in addition to sleeping bags if needed.',
    },
    {
      question: 'Q. Are pets allowed?',
      answer: 'Unfortunately, we are not a pet-friendly campsite.',
    },
    {
      question: 'Q. Are campfires allowed at the campsites?',
      answer: 'Campfire policies vary by campsite. Some campsites allow campfires in designated areas, while others do not permit them. Please check the campsite details or contact us for more information.',
    },
    {
      question: 'Q. Are there any discounts available for group bookings?',
      answer: 'We offer discounts for group bookings at select campsites. Please contact us for more information about group booking discounts and availability.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>FAQs</h2>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleAccordion(index)}>
            <div className="question-text">{faq.question}</div>
            {openIndex === index ? <FaChevronUp className="icon" /> : <FaChevronDown className="icon" />}
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
