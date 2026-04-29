import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(title: "Opções", home: Home()));
}

class Home extends StatefulWidget {
  final String? nome;
  const Home({super.key, this.nome});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  final List<String> opcoes = [
    "Alternativa 1",
    "Alternativa 2",
    "Todas as alternativas",
    "Nenhuma das alternativas",
  ];

  String? opcaoSelecionada;

  void mostrarOpcao() {
    if (opcaoSelecionada != null) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text("Você escolheu: $opcaoSelecionada"),
          backgroundColor: Colors.green,
        ),
      );
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text("Nenhuma opção selecionada."),
          backgroundColor: Colors.redAccent,
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text("Seleção de Alternativas")),
      body: Center(
        child: SingleChildScrollView(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                "Escolha uma das alternativas:",
                style: TextStyle(fontSize: 20, fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 20),

              Column(
                children: opcoes.map((String item) {
                  return RadioListTile<String>(
                    title: Text(item),
                    value: item,
                    groupValue:
                        opcaoSelecionada,
                    onChanged: (String? value) {
                      setState(() {
                        opcaoSelecionada = value;
                      });
                    },
                  );
                }).toList(),
              ),

              const SizedBox(height: 30),

              ElevatedButton(
                onPressed: mostrarOpcao,
                style: ElevatedButton.styleFrom(
                  padding: const EdgeInsets.symmetric(
                    horizontal: 40,
                    vertical: 15,
                  ),
                ),
                child: const Text("Escolher", style: TextStyle(fontSize: 18)),
              ),
            ],
          ),
        ),
      ),
    );
  }
}