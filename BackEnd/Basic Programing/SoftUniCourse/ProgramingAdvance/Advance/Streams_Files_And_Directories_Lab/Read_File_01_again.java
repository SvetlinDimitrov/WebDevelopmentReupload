package JavaAdvance.Streams_Files_And_Directories_Lab;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Scanner;

public class Read_File_01_again {
    public static void main(String[] args) throws IOException {
        Scanner scanner = new Scanner(System.in);
        String path = "C:\\Users\\4orapa\\IdeaProjects\\First step in coding\\SoftUni\\JavaAdvance\\Streams_Files_And_Directories_Lab\\input.txt";
        FileInputStream stream = new FileInputStream(path);


        int num = stream.read();
        while(num>=0){
            System.out.printf("%s ",Integer.toBinaryString(num));
            num = stream.read();
        }
    }
}
