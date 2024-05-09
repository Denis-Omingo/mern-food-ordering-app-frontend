import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react"
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const UsernameMenu = () => {
    const {user,logout}=useAuth0();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-orange-500 gap-2">
            <CircleUserRound className="text-orange-500"/>
            {user?.name}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>
                <Link to='/user-profile' className="font-bold hover:text-orange-500">Profile</Link>
            </DropdownMenuItem>
            <Separator/>
            <DropdownMenuItem>
                <Button className="flex flex-1 font-bold bg-orange-500"
                onClick={()=>logout()}>
                    Log out
                </Button>
            </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default UsernameMenu
