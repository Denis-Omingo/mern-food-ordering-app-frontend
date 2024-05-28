import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import DetailsSection from "./DetailsSection";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./CuisineSection";
import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    restaurantName: z.string({
        required_error: "Restaurant name is required"
    }),
    city: z.string({
        required_error: "City name is required"
    }),
    country: z.string({
        required_error: "Country name is required"
    }),
    deliveryPrice: z.coerce.number({
        required_error: "Delivery price is required",
        invalid_type_error: "Must be a number"
    }),
    estimatedDeliveryTime: z.coerce.number({
        required_error: "Estimated delivery time is required",
        invalid_type_error: "Must be a number"
    }),
    cuisines: z.array(z.string()).nonempty({
        message: "Please select at least one item"
    }),
    menuItems: z.array(z.object({
        name: z.string().min(1, "Name is required"),
        price: z.coerce.number().min(1, "Price is required")
    })),
    imageFile: z.instanceof(File, { message: "Image is required" })
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
    onSave: (restaurantFormData: FormData) => void;
    isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading}: Props) => {
    const methods = useForm<restaurantFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cuisines: [],
            menuItems: [{ name: "", price: 0 }],
        },
    });

    const onSubmit = (formDataJson: restaurantFormData) => {
        const formData = new FormData();
        formData.append("restaurantName", formDataJson.restaurantName);
        formData.append("city", formDataJson.city);
        formData.append("country", formDataJson.country);
        formData.append("deliveryPrice", formDataJson.deliveryPrice.toString());
        formData.append("estimatedDeliveryTime", formDataJson.estimatedDeliveryTime.toString());
        formDataJson.cuisines.forEach((cuisine, index) => {
            formData.append(`cuisines[${index}]`, cuisine);
        });
        formDataJson.menuItems.forEach((menuItem, index) => {
            formData.append(`menuItems[${index}][name]`, menuItem.name);
            formData.append(`menuItems[${index}][price]`, menuItem.price.toString());
        });
        if (formDataJson.imageFile) {
            formData.append("imageFile", formDataJson.imageFile);
        }
        onSave(formData);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
                <DetailsSection />
                <Separator />
                <CuisinesSection />
                <Separator />
                <MenuSection/>
                <Separator/>
                <ImageSection/>

                {isLoading? <LoadingButton/>:<Button type="submit">Submit</Button>}
            </form>
        </FormProvider>
    );
};

export default ManageRestaurantForm;



//original code::

// import { zodResolver } from "@hookform/resolvers/zod";
// import { Form, useForm } from "react-hook-form";
// import { z } from "zod";
// import DetailsSection from "./DetailsSection";
// import { Separator } from "@/components/ui/separator";
// import CuisinesSection from "./CuisineSection";

// const formSchema=z.object({
//     restaurantName:z.string({
//         required_error:"Restaurant name is required"
//     }),
//     city:z.string({
//         required_error:"City name is required"
//     }),
//     country:z.string({
//         required_error:"Country name is required"
//     }),
//     deliveryPrice:z.coerce.number({
//         required_error:"Delivery price name is required",
//         invalid_type_error:"Must be a number"
//     }),
//     estimatedDeliveryTime:z.coerce.number({
//         required_error:"Estimated delivery time is required",
//         invalid_type_error:"Must be a number"
//     }),
//    cuisines: z.array(z.string()).nonempty({
//       message: "please select at least one item",
//     }),
//     menuItems:z.array(z.object({
//         name:z.string().min(1,"name is required"),
//         price:z.coerce.number().min(1,"Price is required")
//     })
// ),
//     imageFile:z.instanceof(File,{message:"Image is required"})
// });

// type restaurantFormData=z.infer<typeof formSchema>

// type Props={
//     // restaurant?:Restaurant;
//     onSave:(restaurantFormData:FormData)=>void;
//     isLoading:boolean;
// };

// const ManageRestaurantForm = ({onSave,isLoading}:Props) => {
//     const form =useForm<restaurantFormData>({
//         resolver:zodResolver(formSchema),
//         defaultValues:{
//             cuisines:[],
//             menuItems:[{name:"",price:0}],
//         },
//     });

//     const onSubmit=(formDataJson :restaurantFormData)=>{

//     }
//   return (
//    <Form>
//         <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-50 p-10 rounded-lg">
//             <DetailsSection/> 
//              <Separator/> 
//              <CuisinesSection/>
//         </form>
//    </Form>
//   )
// }

// export default ManageRestaurantForm
