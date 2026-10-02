from huggingface_hub import hf_hub_download

model_path = hf_hub_download(
    repo_id="Mustafa5645344/insect-detection-yolov8",
    filename="best.pt",
    local_dir="."
)

print("Model downloaded:")
print(model_path)