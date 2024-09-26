import Meals from '@/components/Meals';

export const metadata = {
    title: "Meals",
    description: "Find out your favorite meal",
  };

const MealsPage = () => {
    
    return (
        <div className='bg-black text-white h-screen'>
            <h3 className="text-3xl text-center font-bold">Search Your Meals</h3>
            <Meals></Meals>
        </div>
    );
};

export default MealsPage;