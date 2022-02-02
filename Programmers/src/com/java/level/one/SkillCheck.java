package com.java.level.one;

import java.util.ArrayList;

public class SkillCheck {

	public static void main(String[] args) {
		int[] arr = {1, 1, 3, 3, 0, 1, 1};
		int[] answer = solution(arr);
		
		System.out.println("" + answer[0] + answer[1] + answer.length);
	}

	private static int[] solution(int[] arr) {
		ArrayList<Integer> list = new ArrayList<Integer>();
		
		for(int i=0; i<arr.length; i++) {
			if(listlist.contains(arr[i])) {
				list.add(arr[i]);
			} 
		}
		
		int[] answer = new int[list.size()];
		
		for(int i=0; i<list.size(); i++) {
			answer[i] = list.get(i);
		}
		
		return answer;
	}

}
