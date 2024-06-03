import { IsInt, IsString, isInt } from "class-validator";

export class UpdateBookDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsInt()
    authorId: number;
}