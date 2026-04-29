import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'splash.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String nome = '';
  String idade = '';

  @override
  void initState() {
    super.initState();
    carregarDados();
  }

  Future<void> carregarDados() async {
    final prefs = await SharedPreferences.getInstance();

    setState(() {
      nome = json.decode(prefs.getString('nome') ?? '""');

      idade = json.decode(prefs.getString('idade') ?? '""');
    });
  }

  void voltar() {
    Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => const SplashScreen()),
    );
  }

  Future<void> limparDados() async {
    final prefs = await SharedPreferences.getInstance();

    await prefs.remove('nome');
    await prefs.remove('idade');

    setState(() {
      nome = '';
      idade = '';
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home'), centerTitle: true),

      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const Text(
              'Bem-vindo!',
              style: TextStyle(fontSize: 26, fontWeight: FontWeight.bold),
            ),

            const SizedBox(height: 20),

            Text('Nome: $nome', style: const TextStyle(fontSize: 20)),

            const SizedBox(height: 10),

            Text('Idade: $idade', style: const TextStyle(fontSize: 20)),

            const SizedBox(height: 30),

            ElevatedButton(
              onPressed: voltar,
              child: const Text('Voltar para Splash'),
            ),

            const SizedBox(height: 10),

            ElevatedButton(
              onPressed: limparDados,
              child: const Text('Limpar Dados'),
            ),
          ],
        ),
      ),
    );
  }
}