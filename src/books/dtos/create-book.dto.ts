import { IsInt, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsInt()
    authorId: number;
}