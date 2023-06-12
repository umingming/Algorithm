package com.java.step07.no2941;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		/*
		단어가 주어졌을 때, 몇 개의 크로아티아 알파벳으로 이루어져있는지 출력함.
		-c=, c-, dz=, d-, lj, nj, s=, z=
		
		설계>
		1. Scanner
		2. 단어 입력
		3. replace로 해당 단어들을 *로 수정함.
		4. input의 길이를 출력
		 */
	
		Scanner scan = new Scanner(System.in);
		String input = scan.nextLine();
		String[] str = {"c=","c-","dz=","d-","lj","nj","s=","z="};
		for(int i=0; i<str.length; i++) {
			input = input.replace(str[i], "*");
		}
		input = input.replace("c=", "*")
					 .replace("c-", "*")
					 .replace("dz=", "*")
					 .replace("d-", "*")
					 .replace("lj", "*")
					 .replace("nj", "*")
					 .replace("s=", "*")
					 .replace("z=", "*");
		System.out.println(input.length());
	}

}
