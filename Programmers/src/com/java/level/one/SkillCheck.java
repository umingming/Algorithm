package com.java.level.one;

import java.util.ArrayList;

public class SkillCheck {

	public static void main(String[] args) {
		int[] arr = {1, 1, 3, 3, 0, 1, 1};
		
		ArrayList<Integer> list = new ArrayList<Integer>();
		
	}

	private static int[] solution(int[] arr) {
		ArrayList<Integer> list = new ArrayList<Integer>();
		
		list.add(arr[0]);
		
		for(int i=1; i<arr.length; i++) {
			if(list.get(list.size()-1) != arr[i]) {
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
