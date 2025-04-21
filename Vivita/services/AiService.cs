using Microsoft.ML.OnnxRuntime.Tensors;
using Microsoft.ML.OnnxRuntime;
using Google.Protobuf.WellKnownTypes;
using System.Collections;

namespace Vivita.services
{
    public class AiService
    {
        private readonly InferenceSession _session;

        public AiService()
        {
            _session = new InferenceSession("wwwroot/model.onnx");
        }

        public bool Predict(float[] inputFeatures)
        {
            var tensor = new DenseTensor<float>(inputFeatures, new int[] { 1, inputFeatures.Length });
            var inputs = new NamedOnnxValue[] { NamedOnnxValue.CreateFromTensor("input", tensor) };

            using IDisposableReadOnlyCollection<DisposableNamedOnnxValue> results = _session.Run(inputs);

            var outputValue = results.Last();

            var map = outputValue.AsEnumerable<NamedOnnxValue>();

            var outputList = map.First().Value;

            // First Result
            var res1 = ((IEnumerable)outputList).Cast<object>().First();
            var split1 = res1.ToString().Split(',', '[', ']');
            var value1 = float.Parse(split1[2]);

            // Second Result
            var res2 = ((IEnumerable)outputList).Cast<object>().Last();
            var split2 = res2.ToString().Split(',', '[', ']');
            var value2 = float.Parse(split2[2]);


            if (value2 > value1)
                return true;
            else

                return false;
        }
    }
}
