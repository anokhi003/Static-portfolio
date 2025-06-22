import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import InputField from '../atoms/TextInput';
import TextareaField from '../atoms/TextArea';
import Button from '../atoms/Button';
import PhoneNumberInput from '../atoms/PhoneNumberInput';
import AOS from 'aos';
import 'aos/dist/aos.css';

type FormData = {
	name: string;
	phone: string;
	email: string;
	message: string;
};

const ContactUs: React.FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>();

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data);
	};
  useEffect(() => {
    AOS.init();
}, []);

	return (
		<div className='container dm:my-20 my-14 md:rounded-[101px] sm:rounded-[70px] sm:p-16 p-8 bg-background' data-aos="fade-up">
			<div className='sm:max-w-3xl mx-auto'>
			<h2 className="text-small-heading md:text-heading font-playfair font-bold self-start text-nowrap">
				Contact Me
				</h2>
				<h4 className='font-alexandria font-normal pt-3 md:pt-8 text-small-subHeading md:text-subHeading'>Lorem ipsum dolor sit amet</h4>
				<form onSubmit={handleSubmit(onSubmit)} className='sm:px-10 pt-14 space-y-4'>
					<InputField
						id="name"
						label="Full name"
						placeholder="Enter your name"
						register={register('name', { required: 'Name is required' })}
						error={errors.name?.message}
					// icon={<FiUser />}
					/>
					<div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <PhoneNumberInput
            id="phone"
            label="Phone"
            register={register('phone', { required: 'Phone is required' })}
            error={errors.phone?.message}
            value=""
          
            />
						{/* <InputField
							id="email"
							label="Phone"
							type="text"
							placeholder="Enter your Phone"
							register={register('email', { required: 'Phone is required' })}
							error={errors.email?.message}
						// icon={<FiMail />}
						/> */}
						<InputField
							id="email"
							label="Email"
							type="email"
							placeholder="Enter your email"
							register={register('email', { required: 'Email is required' })}
							error={errors.email?.message}
						// icon={<FiMail />}
						/>
					</div>
					<TextareaField
						id="message"
						label="Message"
						placeholder="Write your message"
						register={register('message', { required: 'Message is required' })}
						error={errors.message?.message}
					/>
					<div className="flex justify-center md:pt-16 pt-8">
						<Button btnText='Submit' className='w-full' btnStyle="PRIMARY" btnType="submit">
						</Button>
					</div>
				</form>
			</div>
		</div>
	)
}

export default ContactUs
