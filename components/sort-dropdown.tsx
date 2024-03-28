import { cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Option {
  label: string
  value: string
}

interface SortDropdownProps {
  options: Option[]
  onChange?: (value: "asc" | "desc") => void
  className?: string
}

export default function SortDropdown({
  options,
  onChange,
  className,
}: SortDropdownProps) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span className="whitespace-nowrap text-sm font-medium">Sort By:</span>
      <Select onValueChange={onChange}>
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Date" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
